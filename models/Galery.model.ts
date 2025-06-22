export interface GalerytDto {
    uuid: string
    filePath: string
}

export const galeryDtoInitialState = () => ({
    uuid: '',
    filePath: null
});

