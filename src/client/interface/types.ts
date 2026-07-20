import Vide from "@rbxts/vide";
export type Derivable<T> = T | (() => T);
export type Component = () => Vide.Node;
