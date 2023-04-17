/**
 * @param {*} T 原始表单数据
 * @return {*}
 */
export const overallFormHooks = <T = any>(data: T) => {
  // 表单ref
  const overallFormRef = ref();
  // 表单内容
  const overallFormData = ref<T>({ ...data });
  // 表单提交验证
  const validate = () =>
    overallFormRef?.value?.overallFormRef.validate(
      (isValid: boolean, invalidFields: any) => {
        if (invalidFields) return;
      }
    );
  // 重置表单必填项
  const clearValidate = () =>
    overallFormRef?.value?.overallFormRef.clearValidate();
  // 重置表单内容及必填项
  const resetFields = () => overallFormRef?.value?.overallFormRef.resetFields();
  return {
    overallFormRef,
    overallFormData,
    validate,
    resetFields,
    clearValidate
  };
};
