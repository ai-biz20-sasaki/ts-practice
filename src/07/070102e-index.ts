//何も変数をimportしないが、モジュールの読み込みは行う。
//これにより、このindex.tsを実行すると、counter.ts->foo.ts->bar.tsの順にモジュールが実行される
import "./070102e-foo.js";
import "./070102e-bar.js";
