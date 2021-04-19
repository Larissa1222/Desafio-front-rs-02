import { ButtonHTMLAttributes } from 'react';
import { ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

export interface IContentProps {
  children: ReactNode;
  genre: string;
}

export interface IconProps {
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  color: string;
}

export interface MovieCardProps {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
}

export interface SideBarProps {
  children: ReactNode;
}

export interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}
  
export interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}