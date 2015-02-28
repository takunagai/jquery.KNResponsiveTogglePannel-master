# JQuery.KNResponsiveMenu

PCのクリック操作、スマホのタッチ操作、どちらでも快適に動作する開閉メニューを作りたくて自作してみました。JQueryのプラグインとして提供していますのでご自由にご利用ください。

## 設置方法

### (1) jQueryとjquery.KNResponsiveMenu.jsを読み込む

jquery.KNResponsiveMenu.jsをダウンロードして、任意のディレクトリにコピーしてください（jqueryは公式のサイトよりダウンロードしてください）。その後、HTMLのhead内にJQueryとjquery.KNResponsiveMenu.jsを読み込みます。

	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/jquery.KNResponsiveMenu.js"></script>

### (2) jquery.KNResponsiveMenuの初期設定

(1)のコードの次に続けて下記のコードを記述します。$(".neko_next")の部分（セレクタ部分）は好きなID名、クラス名にする事ができます。

	<script>
		$(function(){
			$(".neko_next").KNResponsiveMenu();
		});
	</script>

### (3) HTMLの編集

下記のコードを記述します。セレクタで指定した要素をボタンとし、セレクタの次の要素が開閉できるようになります。

	<div class="neko_next">click</div>
	<ul>
		<li>aaa</li>
		<li>aaa</li>
		<li>aaa</li>
		<li>aaa</li>
		<li>aaa</li>
		<li>aaa</li>
	</ul>

以上が基本の使い方となります。

## オプション（Options）

(2)の手順「jquery.KNResponsiveMenuの初期設定」で記述したコードでは、初期設定としてセレクタの次の要素を開閉できるようになります。セレクタの次の要素以外に、セレクタの前の要素、セレクタの小要素を開閉できるオプションを用意しています。

### 前の要素を開閉する

#### jquery.KNResponsiveMenuの初期設定

	<script>
		$(function(){
			$(".neko_next").KNResponsiveMenu({
				// 前の要素を開閉にする
				position : 'prev'
			});
		});
	</script>

#### HTML記述例

	<ul>
		<li>bbb</li>
		<li>bbb</li>
		<li>bbb</li>
		<li>bbb</li>
		<li>bbb</li>
	</ul>
	<div class="neko_prev">click</div>

上記のコードの例では、クラス neko_prev の前の要素 \<ul>〜\</ul> が開閉できるようになります。

### 子要素を開閉する

#### jquery.KNResponsiveMenuの初期設定

	<script>
		$(function(){
			$(".neko_next").KNResponsiveMenu({
				// 子要素を開閉にする
				position : 'children'
			});
		});
	</script>

#### HTML記述例

	<ul>
		<li class="neko_child">click
			<ul>
				<li><a href="">ddd</a></li>
				<li><a href="">ddd</a></li>
				<li><a href="">ddd</a></li>
				<li><a href="">ddd</a></li>
				<li><a href="">ddd</a></li>
			</ul>
		</li>
		<li>ccc</li>
		<li>ccc</li>
		<li>ccc</li>
		<li>ccc</li>
		<li>ccc</li>
	</ul>

上記のコードの例では、クラス neko_child の子要素 \<ul>〜\</ul> が開閉できるようになります。

### 複数設置 

次のURLではDemoページをご用意しております。複数設置やリストの段階式な開閉についても実現しています。参考程度にご覧ください。

jquery.KNResponsiveMenu Demo  
[http://www.chara-de-nakata.com/dl/js/jquery.KNResponsiveMenu-master/sample.html](http://www.chara-de-nakata.com/dl/js/jquery.KNResponsiveMenu-master/sample.html)