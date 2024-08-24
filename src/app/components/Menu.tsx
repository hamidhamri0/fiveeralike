import {
  createContext,
  useContext,
  useState,
  ReactNode,
  MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { useOutsideClick } from "../useHooks/useOutsideClick";
import { OpenArrow } from "./Footer";
import { twMerge } from "tailwind-merge";
import Btn from "./smallComponents/Button";

interface MenusContextType {
  openId: string;
  close: () => void;
  open: (id: string) => void;
  position: { x: number; y: number } | null;
  setPosition: (position: { x: number; y: number }) => void;
  setLastClickedLabel: (label: string) => void;
  lastClickedLabel: string;
}

export const MenusContext = createContext<MenusContextType | undefined>(
  undefined,
);

interface MenusProps {
  children: ReactNode;
  doSomethingWhenClosed?: () => void;
}

function Menus({ children, doSomethingWhenClosed }: MenusProps) {
  const [openId, setOpenId] = useState<string>("");
  const [position, setPosition] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [lastClickedLabel, setLastClickedLabel] = useState<string>("");

  const close = () => {
    setOpenId("");
    doSomethingWhenClosed?.();
  };
  const open = (id: string) => setOpenId(id);

  return (
    <MenusContext.Provider
      value={{
        openId,
        close,
        open,
        position,
        setPosition,
        lastClickedLabel,
        setLastClickedLabel,
      }}
    >
      {children}
    </MenusContext.Provider>
  );
}

interface ToggleProps {
  id: string;
  children: ReactNode;
}

function Toggle({ id, children }: ToggleProps) {
  const context = useContext(MenusContext);
  if (!context) {
    throw new Error("Toggle must be used within a Menus");
  }
  const { openId, close, open, setPosition } = context;

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    e.stopPropagation();

    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: rect.left + window.scrollX,
      y: rect.bottom + window.scrollY + 10,
    });

    openId === "" || openId !== id ? open(id) : close();
  }

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      {children}
    </div>
  );
}

interface ListProps {
  id: string;
  children: ReactNode;
  className?: string;
}

function List({ id, children, className = "" }: ListProps) {
  const context = useContext(MenusContext);
  if (!context) {
    throw new Error("List must be used within a Menus");
  }
  const { openId, position, close } = context;
  const ref = useOutsideClick(close, false);

  if (openId !== id || !position) return null;
  console.log(openId !== id, " ", openId, " ", id);

  let { x, y } = position;
  className = twMerge("absolute z-50", className);
  return createPortal(
    <div
      style={{ left: `${Math.floor(x)}px`, top: `${Math.floor(y)}px` }}
      className={className}
      ref={ref as React.RefObject<HTMLDivElement>}
    >
      {children}
    </div>,
    document.body,
  );
}

type DropDownProps = {
  label: string;
  id: string;
  className?: string;
};

function DropDown({ label, id, className = "" }: DropDownProps) {
  const context = useContext(MenusContext)!;
  if (!context) {
    throw new Error("List must be used within a Menus");
  }
  const { openId, lastClickedLabel } = context;
  className = twMerge(
    "flex cursor-pointer gap-3 rounded-md px-4 py-2 text-lg text-gray-900 hover:bg-gray-100 hover:bg-opacity-70",
    className,
  );
  return (
    <a className={className}>
      <span className="font-semibold">{lastClickedLabel || label}</span>
      <OpenArrow className="!flex" isOpen={openId == id} />
    </a>
  );
}

type ButtonProps = {
  children: ReactNode;
  icon?: ReactNode;
  onClick?: () => void;
};

function Button({ children, icon, onClick }: ButtonProps) {
  const context = useContext(MenusContext);
  if (!context) {
    throw new Error("Button must be used within a Menus");
  }
  const { close, setLastClickedLabel } = context;

  function handleClick() {
    onClick?.();
    setLastClickedLabel(children as string);
    close();
  }

  return (
    <Btn color="white" className="mb-2" onClick={handleClick}>
      {children as string}
    </Btn>
  );
}

function Menu({ children }) {
  return <>{children} </>;
}

Menus.Menu = Menu;
Menus.DropDown = DropDown;
Menus.Toggle = Toggle;
Menus.List = List;
Menus.Button = Button;

export default Menus;
