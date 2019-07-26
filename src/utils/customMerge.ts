export function customMerge<E, K>(srcEntities: E, newEntities: K) {
    const out = Object.assign({}, srcEntities)

    Object.keys(newEntities).forEach(name => {
        out[name] = {}
        Object.assign(out[name], srcEntities[name], newEntities[name])
    })

    return out as E
}
