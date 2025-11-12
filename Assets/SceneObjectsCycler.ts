@component
export class SceneObjectsCycler extends BaseScriptComponent {

    @input("SceneObject")
    sceneObjectsContainer: SceneObject
    _current = 0

    onAwake() {
    }

    show() {
        this.sceneObjectsContainer.children.forEach((c) => c.enabled = false)
        this.sceneObjectsContainer.children[this._current].enabled = true
    }

    next() {
        this._current++
        if (this._current > this.sceneObjectsContainer.children.length - 1)
            this._current = 0
        this.show()
    }

    previous() {
        this._current--
        if (this._current < 0)
            this._current = this.sceneObjectsContainer.children.length - 1
        this.show()
    }
}
