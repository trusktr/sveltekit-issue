// place files you want to import through the `$lib` alias in this folder.

function element(name: string) {
	return function (Class: any) {
		name;
		return Class;
	};
}

export
@element('kitchen-sink')
class KitchenSink extends Element {}
