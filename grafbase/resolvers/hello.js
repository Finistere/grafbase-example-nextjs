export default async function Resolver(root, args, context) {
  return await fetch("https://www.google.fr", { cf: { cacheTtl: 0 } }).then(res => res.text())
}
