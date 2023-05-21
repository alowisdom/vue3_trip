
// vite动态展示图片的时候，需要url

export const getAssetURL= (iconPath) => {
    // 参数一，相对路径  参数二，当前路径的url
    return new URL(`../assets/img/${iconPath}`,import.meta.url).href
}