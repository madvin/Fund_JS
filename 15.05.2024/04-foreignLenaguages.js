function languages(country) {
    if (country === 'USA' || country === 'England') {
        console.log('English');
    } else if (country === 'Mexico' || country === 'Spain' || country === 'Argentina') {
        console.log('Spanish');
    } else {
        console.log('unknown');
    }
}
languages('Argentina')