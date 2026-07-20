import Vide from "@rbxts/vide";
import { Players, RunService } from "@rbxts/services";
import { Controller, OnStart } from "@flamework/core";

@Controller()
export class App implements OnStart {
	onStart(): void {
		Vide.strict = RunService.IsStudio();

		Vide.mount(this.App);
	}

	private App() {
		return (
			<screengui
				Name="App"
				ResetOnSpawn={false}
				IgnoreGuiInset={true}
				ZIndexBehavior={Enum.ZIndexBehavior.Sibling}
			></screengui>
		);
	}
}
