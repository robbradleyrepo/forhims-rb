import R from "ramda";

export const indexedMap = R.addIndex(R.map);

export function mapUrlsToImageProps(urls) {
  return indexedMap(
    (url, idx) => ({
      key: `product_hero_image_${idx}`,
      src: url,
      targetRefIndex: idx
    }),
    urls
  );
}
