import { reactive } from "vue";

const globalState = reactive({
  searchString: "",
});

export const useStatefulComposable = () => {
  const localState = reactive({
    searchString: "",
  });

  const updateValues = (sValue: string) => {
    // Set the global state values
    globalState.searchString = `/${sValue}/gi`;

    // Set the local state values
    localState.searchString = `/${sValue}/gi`;
  };

  return {
    globalState,
    localState,
    updateValues,
  };
};
