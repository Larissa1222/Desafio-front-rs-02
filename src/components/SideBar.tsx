import { SideBarProps } from '../services/interfaces';

export function SideBar({ children }: SideBarProps) {
  
  return(
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {children}
      </div>
    </nav>
  );
}