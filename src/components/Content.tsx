import { ReactNode } from "react";

interface IContentProps {
  children: ReactNode;
  genre: string;
}

export function Content({ genre, children }: IContentProps) {

  return (
    <div className="container">
      <header>
        <span className="category">Categoria:<span> {genre}</span></span>
      </header>
      <main>
        <div className="movies-list">
          {children}
        </div>
      </main>
    </div>
  );
}