import { t } from "@rbxts/t";

export interface PlayerData {
	coins: number;
}

export const DEFAULT_DATA: PlayerData = {
	coins: 0,
};

export const playerSchema = t.strictInterface({
	coins: t.number,
});
