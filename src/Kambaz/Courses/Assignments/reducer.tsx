import { createSlice } from "@reduxjs/toolkit";

// ✅ Start with empty array, fetch from backend
const initialState = {
  assignments: [],
};

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState,
  reducers: {
    // 🔁 Used when you fetch all assignments for a course
    setAssignments: (state, { payload }) => {
      state.assignments = payload;
    },

    // ✅ When a new assignment is added (backend returns full assignment with _id)
    addAssignment: (state, { payload }) => {
      state.assignments = [...state.assignments, payload];
    },

    // ✅ Remove assignment by _id
    deleteAssignment: (state, { payload: assignmentID }) => {
      state.assignments = state.assignments.filter(
        (a: any) => a._id !== assignmentID
      );
    },

    // ✅ Replace updated assignment in state
    updateAssignment: (state, { payload: updated }) => {
      state.assignments = state.assignments.map((a: any) =>
        a._id === updated._id ? updated : a
      );
    },
  },
});

export const {
  setAssignments,
  addAssignment,
  deleteAssignment,
  updateAssignment,
} = assignmentsSlice.actions;

export default assignmentsSlice.reducer;
