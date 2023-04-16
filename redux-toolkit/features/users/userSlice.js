const { createAsyncThunk } = require("@reduxjs/toolkit");
const { default: axios } = require("axios");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((u) => u.id));
});

// console.log("data", fetchUsers);

//this will return pending, fullfilled, rejected
const userSlice = createSlice({
  name: "user",
  initialState,
  //we are going to create casees just for fetchUsers that's why we will use the builder
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      // console.log("1st ", state);
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      (state.loading = false),
        (state.data = action.payload),
        (state.error = "");
      // console.log("2nd ", action);
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      // console.log("3rd ", state);
      (state.loading = false),
        (state.data = []),
        (state.error = action.error.message);
    });
  },
});

module.exports = userSlice.reducer;
module.exports.fetchUsers = fetchUsers;
