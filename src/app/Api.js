export async function getCount(){
    const res = await fetch('https://agency.teamrabbil.com/api/StatList')
    if(!res.ok){
        throw new Error("Hero List calling Fail")
    }
    return res.json()
}

export async function getWork(){
    const res = await fetch('https://agency.teamrabbil.com/api/WorkList')
    if(!res.ok){
        throw new Error("Work List calling Fail")
    }
    return res.json()
}

export async function getFeatured(){
    const res = await fetch('https://agency.teamrabbil.com/api/FeaturedProject')
    if(!res.ok){
        throw new Error("Featured List calling Fail")
    }
    return res.json()
}

export async function getBrandLogo(){
    const res=await fetch("https://agency.teamrabbil.com/api/BrandList");
    if(!res.ok){
        throw new Error("BrandList Calling Fail");
    }
    return res.json();
 }
 