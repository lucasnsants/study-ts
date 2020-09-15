"use strict";
//<reference path=""/> adicionar mais 1 /
var Geometria;
(function (Geometria) {
    let Areas;
    (function (Areas) {
        const PI = 3.14;
        function areaCircunferencia(raio) {
            return PI * Math.pow(raio, 2);
        }
        Areas.areaCircunferencia = areaCircunferencia;
        function areaRetangulo(base, altura) {
            return base * altura;
        }
        Areas.areaRetangulo = areaRetangulo;
    })(Areas = Geometria.Areas || (Geometria.Areas = {}));
})(Geometria || (Geometria = {}));
console.log(Geometria.Areas.areaCircunferencia(10));
console.log(Geometria.Areas.areaRetangulo(10, 20));
//# sourceMappingURL=namespaces.js.map