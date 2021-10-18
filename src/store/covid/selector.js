export const getCOVIDStore = (store) => store.covid;
export const getCOVIDData = (store) => getCOVIDStore(store).data;
export const getCOVIDLoading = (store) => getCOVIDStore(store).isLoading;
export const getCOVIDError = (store) => getCOVIDStore(store).isError;

export const covidSelectors = {
    getCOVIDStore,
    getCOVIDData,
    getCOVIDLoading,
    getCOVIDError
};