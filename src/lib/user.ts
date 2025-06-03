import axiosClient from "./axios";
import { CurrentSession } from "./session";

export type User = CurrentSession["user"];

export const updateUser = async (id: string, payload: UpdateUserPayload): Promise<{ success: boolean }> => {
    const response = await axiosClient.put(`/users/${id}`, payload);
    return response.data
}