import axiosClient, { postFormData, putFormData } from "../Utils/axiosClient";
import { products } from "App/Utils/Constants/endpoints";

/**
 * Get products
 * @param {object} [params] parameters for get request
 * @param {number} [params.pageIndex] current page of get request
 * @param {number} [params.pageSize] current page size of get request
 * @param {number} [params.storeId] store id which contains products
 */
export const getAllProduct = async (
  { pageIndex = 1, pageSize = 5, status = "Active", storeId },
  searchParams = {}
) => {
  const params = { pageIndex, pageSize, status, storeId, ...searchParams };
  return (await axiosClient.get(products, { params })).data;
};

export const getAllProductOfStore = async ({
  status = "Active",
  storeId,
  searchObject = {},
}) => {
  const params = { status, storeId, ...searchObject };
  return (await axiosClient.get(products, { isAll: true, params })).data;
};

/**
 * Create product
 * @param {object} [data] values post
 */
export const postProduct = async (data) => {
  return (await postFormData(products, data)).data;
};

/**
 * Update product
 * @param {number} [id] product id
 * @param {object} [data] data to update
 */
export const putProduct = async (id, data) => {
  return (await putFormData(products + "/" + id, data)).data;
};

/**
 * Delete Product
 * @param {number} [id] product id
 */
export const deleteProduct = async (id) => {
  const status = (await axiosClient.delete(products + "/" + id)).status;
  return status === 204;
};
