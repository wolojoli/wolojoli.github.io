
function stapel(value) {
    var s = 0;
    while (value > 0) {
        s += value % 10;
        value = Math.floor(value / 10);
    }

    return s;
}

app.controller('ww', function ($scope) {

    $scope.wwMethods = [
            { name: 'a=1...z=26', value: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 } },
            { name: 'a=26...z=1', value: { a: 26, b: 25, c: 24, d: 23, e: 22, f: 21, g: 20, h: 19, i: 18, j: 17, k: 16, l: 15, m: 14, n: 13, o: 12, p: 11, q: 10, r: 9, s: 8, t: 7, u: 6, v: 5, w: 4, x: 3, y: 2, z: 1 } },
            { name: 'a=0...z=25', value: { a: 0, b: 1, c: 2, d: 3, e: 4, f: 5, g: 6, h: 7, i: 8, j: 9, k: 10, l: 11, m: 12, n: 13, o: 14, p: 15, q: 16, r: 17, s: 18, t: 19, u: 20, v: 21, w: 22, x: 23, y: 24, z: 25 } },
            { name: 'a=25...z=0', value: { a: 25, b: 24, c: 23, d: 22, e: 21, f: 20, g: 19, h: 18, i: 17, j: 16, k: 15, l: 14, m: 13, n: 12, o: 11, p: 10, q: 9, r: 8, s: 7, t: 6, u: 5, v: 4, w: 3, x: 2, y: 1, z: 0 } },
            { name: 'a=2...z=9 (Vanity code)', value: { a: 2, b: 2, c: 2, d: 3, e: 3, f: 3, g: 4, h: 4, i: 4, j: 5, k: 5, l: 5, m: 6, n: 162, o: 6, p: 7, q: 7, r: 7, s: 7, t: 8, u: 8, v: 8, w: 9, x: 9, y: 9, z: 9 } },
            { name: 'a=1...z=4 (Scrable NL)', value: { a: 1, b: 3, c: 5, d: 2, e: 1, f: 4, g: 3, h: 4, i: 1, j: 4, k: 3, l: 3, m: 3, n: 1, o: 1, p: 3, q: 10, r: 2, s: 2, t: 2, u: 4, v: 4, w: 5, x: 8, y: 8, z: 4 } },
            { name: 'a=1...z=4 (Scrable UK)', value: { a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3, n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10 } },
            { name: 'a=1...z=4 (Scrable DE)', value: { a: 1, b: 3, c: 4, d: 1, e: 1, f: 4, g: 2, h: 2, i: 1, j: 6, k: 4, l: 2, m: 3, n: 1, o: 2, p: 4, q: 10, r: 1, s: 1, t: 1, u: 1, v: 6, w: 3, x: 8, y: 10, z: 3 } }
    ];
    $scope.selectedMethod = $scope.wwMethods[0];
    $scope.wwText = '';
    $scope.stapel = 0;
    $scope.one = 0;
    $scope.woordWaarde = function () {
        
        var values = $scope.selectedMethod.value,
            value = 0,
            letters = $scope.wwText.toLowerCase().split(''),
            i;

        for (i = 0; i < letters.length; i++) {
            var add =values[letters[i]]; 
            
            if(!add && $scope.selectedMethod.name == 'a=1...z=4 (Scrable DE)'){
                if(letters[i] == 'ä' || letters[i] == 'ü') add = 6;
                else if(letters[i] == 'ö') add = 8;
            }
            
            value += add || 0;
        }

        $scope.stapel = $scope.one = stapel(value);

        while ($scope.one > 9) {
            $scope.one = stapel($scope.one);
        }

        return value;
    };
});
