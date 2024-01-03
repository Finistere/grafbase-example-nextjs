export default async function Resolver(_, __, { kv }) {
  const kvKey = "test";

  let { value } = await kv.get(kvKey);
  if (value == null) {
    console.info(`Key ${kvKey} doesn't exist in KV. Creating ...`);
    await kv.set(kvKey, "hello kv!");
  }

  let { value: kv_value } = await kv.get(kvKey);

  return kv_value;
}
