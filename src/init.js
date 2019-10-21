let projectId;
let xsollaLoginId;
let version;

export const init = (config) => {
    projectId = config.projectId,
    xsollaLoginId = config.xsollaLoginId,
    version = config.version
}

export const config = {
    getProjectId: () => {
        return projectId;
    },
    getXsollaLoginId: () => {
        return xsollaLoginId;
    },
    getVersion: () => {
        return version;
    }
}

