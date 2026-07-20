import Vide from "@rbxts/vide";

export function Padding({ all }: { all: number }) {
	const udim = new UDim(0, all);
	return <uipadding PaddingTop={udim} PaddingBottom={udim} PaddingLeft={udim} PaddingRight={udim} />;
}
