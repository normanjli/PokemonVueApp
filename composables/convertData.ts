export const useConvertData = <
  T extends { new (...args: any[]): InstanceType<T> }
>({
  data,
  model,
}: {
  data: any[];
  model: T;
}) => {
  return ref(data.map((obj) => new model(obj)));
};
