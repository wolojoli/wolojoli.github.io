function caesarShift(text, shift) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
        var c = text.charCodeAt(i);
        if (c >= 65 && c <= 90) result += String.fromCharCode((c - 65 + shift) % 26 + 65); // Uppercase
        else if (c >= 97 && c <= 122) result += String.fromCharCode((c - 97 + shift) % 26 + 97); // Lowercase
        else result += text.charAt(i); // Copy
    }
    return result;
}

app.controller('rotx', function ($scope) {
    $scope.vals = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
    $scope.rot = 13;
    $scope.text = '';
    $scope.rotate = function () {
        if($scope.rot == 0) $scope.rot = 25;
        if($scope.rot == 26) $scope.rot = 1;
        return caesarShift($scope.text,$scope.rot);
    };
});