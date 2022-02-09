class CheatManager
{
    constructor()
    {
        this.binds = []
        this.features = []
    }

    registerFeature(feature)
    {
        this.binds.push(feature.getKey())
        this.features.push(feature)
    }

    getFeatureByKey(key)
    {
        return this.features.filter(f => f.key === key)
    }

    getFeatureByName(name)
    {
        return this.features.filter(f => f.name === name)
    }
}

module.exports = CheatManager