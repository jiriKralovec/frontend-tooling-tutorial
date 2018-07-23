import {RenderingEngineInjectable} from "../di-container";
import {SceneManager} from "./scene-manager";
import {FramebufferManager} from "./framebuffer-manager";
import {uuid} from "../util/uuid";

@RenderingEngineInjectable()
export class InteractionManager {

    private readonly _uuid: string;

    constructor(private sceneManager: SceneManager, private framebufferManager: FramebufferManager) {
        this._uuid = uuid.generate();
    }

    get uuid(): string {
        return this._uuid;
    }
}