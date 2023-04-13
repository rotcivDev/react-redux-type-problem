import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./";

export type ICourseModuleCreation = {
  title: string;
  description: string;
  available_from: string;
  available_to: string;
  available_after_days: null | number;
  qty_payments: number | null;
};

type NewModuleDataPayload = {
  key: keyof ICourseModuleCreation;
  value: string | number;
};

export type CourseModuleState = {
  newModuleData: ICourseModuleCreation;
};

export const couseModuleInitialState: CourseModuleState = {
  newModuleData: {
    available_after_days: null,
    available_from: "",
    available_to: "",
    description: "",
    qty_payments: null,
    title: "",
  },
};

export const couseModule = createSlice({
  name: "course-modules",
  initialState: couseModuleInitialState,
  reducers: {
    updateNewModuleData: (
      { newModuleData },
      { payload }: PayloadAction<NewModuleDataPayload>
    ) => {
      const { key, value } = payload;

      newModuleData[key] = value;
      // The following line resolve the problem but seems a wrong solution.
      // newModuleData[key] = value as never;
  },
});

export const { updateNewModuleData } = couseModule.actions;

export const selectNewModuleData = ({ newModuleData }: RootState) =>
  newModuleData;

export default couseModule.reducer;
