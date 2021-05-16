/**
 * Create a root node. This node can be used as a target container for the ReactDOM-Renderer.
 *
 * @param id {string}
 * @returns {HTMLDivElement}
 */
export default function createRootNode(id = 'root') {
    const container = document.createElement('div')
    container.id = id
    document.body.appendChild(container)

    return container
}
