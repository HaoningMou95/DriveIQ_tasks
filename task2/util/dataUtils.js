const dataFilter = (data, category, limit)=> {
    if(!data){
        return 'cannot fetch'
    }

    // no category entered
    if(!category){
        result = data.entries
    }else{
        result = data.entries.filter(item => item.Category === category)
    }
    
    // return limit amount of data after category filter
    if( limit && limit > 0 && result.length > limit ){
        return {
            count: limit,
            entries: result.slice(0,limit)
        }
    }

    // if no category or limit passed return all data
    return {
        count: result.length,
        entries: result
    }
}

module.exports = {
    dataFilter
}