import axiosClient from "../Utils/axiosClient";
import { productGroups } from "App/Utils/Constants/endpoints";
/**
 * Page wrapper for new page
 */
export const getAllProductGroups = async () => {
  return (await axiosClient.get(productGroups, { isAll: true })).data;
};
