import { Service, OnStart } from "@flamework/core";
import Lyra from "@rbxts/lyra";
import { Players } from "@rbxts/services";
import { playerSchema, PlayerData, DEFAULT_DATA } from "shared/types";

@Service()
export class DataService implements OnStart {
	private store = Lyra.createPlayerStore<PlayerData>({
		name: "PlayerData_v1",
		template: DEFAULT_DATA,
		schema: playerSchema,
	});

	onStart(): void {
		Players.PlayerAdded.Connect((player) => {
			this.store.load(player).catch((err) => warn(`Failed to load player data for ${player.Name}: ${err}`));
		});

		Players.PlayerRemoving.Connect((player) => {
			this.store.unload(player);
		});

		game.BindToClose(() => this.store.close());
	}

	public getData(player: Player): PlayerData {
		return this.store.getAsync(player);
	}

	public update(player: Player, mutate: (data: PlayerData) => boolean): void {
		this.store.update(player, mutate);
	}
}
