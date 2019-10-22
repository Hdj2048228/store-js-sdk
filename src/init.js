let projectId;
let version;

export const init = (config) => {
    projectId = config.projectId;
    version = config.version;
};

export const config = {
    getProjectId: () => {
        return projectId;
    },
    getVersion: () => {
        return version;
    }
};