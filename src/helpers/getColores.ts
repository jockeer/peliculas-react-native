import ImageColors from "react-native-image-colors"


export const getColores = async (uri:string) => {
    const colores = await ImageColors.getColors(uri, {})
    let primary;
    let secundary;

    switch (colores.platform) {
        case 'android':
            primary = colores.dominant
            secundary = colores.average
            break;
        case 'ios':
            primary = colores.primary
            secundary = colores.secondary 
            break;

    }

    return [primary, secundary]
}