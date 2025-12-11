import { create } from "zustand";

// const useName = create();
export const useName = create((set) => ({
    name: "",
    setName: (name) => set({"name": name}),
}));

export const useUserInfo = create(set => ({
    userInfo: {
        username: "",
        email: "",
        phone: "",
    },
    setUserInfo: (user) => set({userInfo: user})
}))

export const useUserInfoList = create(set => ({
    userInfoList: [],
    setUserInfoList: (user) => set((state) => ({userInfoList: [...state.userInfoList, user]})),
    // 매개변수로 넘어온 객체를 어떻게 리스트에 추가할지?
}))
