import * as J from "jamango";
import { randomIntFromInterval, wait } from "../shared/utils";

export function sendDeathMessage(plr: J.EntityId) {
    const username = J.getPlayerUsername(plr);
    J.sendChatMessage(`${username} has been discarded`, "#cc0000");
};

export function randomGlitchStatements() {
    const STATEMENTS = [
        "You won't stop me.",
        "The Imagination Tech is mine.",
        "Your destruction is inevitable.",
        "This world is ours.",
        "Our kind is superior.",
        "Our kind will destroy yours.",
    ];
    const TEXT_COLOURS = [
        "#2bff00",
        "#ff0000",
        "#2b00ff",
        "#300068",
        "#ff5900",
    ];
    wait(randomIntFromInterval(30,70), () => {
        J.sendChatMessage(STATEMENTS[randomIntFromInterval(0, STATEMENTS.length - 1)],
        TEXT_COLOURS[randomIntFromInterval(0, TEXT_COLOURS.length - 1)]);
    });
};
