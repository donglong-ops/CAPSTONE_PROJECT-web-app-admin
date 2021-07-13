import axiosClient from "../Utils/axiosClient";
import { floorPlans } from "../Constants/endpoints";
/**
 * Page wrapper for new page
 * @param {object} [params] parameters for get request
 * @param {number} [params.pageIndex] current page of get request
 * @param {number} [params.pageSize] current page size of get request
 * @param {number} [params.buildingId] building id which contains floor plans
 */
export const getAll = async ({ pageIndex = 1, pageSize = 5, buildingId }) => {
  const params = { pageIndex, pageSize, buildingId };
  const response = await axiosClient.get(floorPlans, { params });
  return response.data;
};
/**
 * Page wrapper for new page
 * @param {object} [params] parameters for get request
 * @param {number} [params.id] building id which contains floor plans
 */
export const getById = async (id) => {
  const response = await axiosClient.get(`${floorPlans}/${id}`);
  return response.data;
};
