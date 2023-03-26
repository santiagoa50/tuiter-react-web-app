import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {
        name: 'Han Solo',
        handle: 'hansolo',
        profilePicture: 'han solo.jpg',
        bannerPicture: 'trio.jpeg',
        bio: 'Charming former smuggler with a heart of gold.',
        location: 'Corellia',
        dateOfBirth: '32 BBY',
        dateJoined: '31 BBY',
        followingCount: 340,
        followersCount: 223,
        numOfTuits: 6114

    }
}

const profileSlice = createSlice({
    name: 'profile',
    initialState: initialState,
    reducers: {
        updateProfile(state, action) {
            state.currentUser = action.payload
        }
    }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;
