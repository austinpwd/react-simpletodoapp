const tagline = function (elementType='h2', tagline="It's very simple — you read the protocol and write the code." , className="ui-tagline"){
     const element = `<${elementType} class="${className}">${tagline}</${elementType}>`
     return element
}

export default tagline