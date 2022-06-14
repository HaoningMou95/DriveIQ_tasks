const dataFilter = (data, category, limit)=> {
    if(!data){
        return 'cannot fetch'
    }
    if(!category){
        result = data.entries
    }else{
        result = data.entries.filter(item => item.Category === category)
    }
    
    if( limit && limit > 0 && result.length > limit ){
        return {
            count: limit,
            entries: result.slice(0,limit)
        }
    }
    return {
        count: result.length,
        entries: result
    }
}

module.exports = {
    dataFilter
}