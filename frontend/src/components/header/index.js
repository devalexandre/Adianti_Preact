import { h, Component } from 'preact';
import { route } from 'preact-router';
import Toolbar from 'preact-material-components/Toolbar';
import Drawer from 'preact-material-components/Drawer';
import List from 'preact-material-components/List';
import Dialog from 'preact-material-components/Dialog';
import Switch from 'preact-material-components/Switch';
import 'preact-material-components/Switch/style.css';
import 'preact-material-components/Dialog/style.css';
import 'preact-material-components/Drawer/style.css';
import 'preact-material-components/List/style.css';
import 'preact-material-components/Toolbar/style.css';
// import style from './style';

export default class Header extends Component {
	closeDrawer() {
		this.drawer.MDComponent.open = false;
		this.state = {
			darkThemeEnabled: false
		};
	}

	openDrawer = () => (this.drawer.MDComponent.open = true);

	openSettings = () => this.dialog.MDComponent.show();

	drawerRef = drawer => (this.drawer = drawer);
	dialogRef = dialog => (this.dialog = dialog);

	linkTo = path => () => {
		route(path);
		this.closeDrawer();
	};

	goHome = this.linkTo('/');
	gotCategoria = this.linkTo('/categorias');
	gotFornecedor = this.linkTo('/fornecedores');
	gotPagar = this.linkTo('/contaspagar');
	gotReceber = this.linkTo('/contasreceber');
	gotUsuarios = this.linkTo('/usuarios');



	render() {
		return (
			<div>
				<Toolbar className="toolbar">
					<Toolbar.Row>
						<Toolbar.Section align-start>
							<Toolbar.Icon menu onClick={this.openDrawer}>
								menu
							</Toolbar.Icon>
							<Toolbar.Title>Controle Financeiro</Toolbar.Title>
						</Toolbar.Section>
	
					</Toolbar.Row>
				</Toolbar>
				<Drawer.TemporaryDrawer ref={this.drawerRef}>
					<Drawer.DrawerContent>
						<Drawer.DrawerItem onClick={this.goHome}>
							<List.ItemGraphic>home</List.ItemGraphic>
							Home
						</Drawer.DrawerItem>
						<Drawer.DrawerItem onClick={this.gotCategoria}>
							<List.ItemGraphic>account_circle</List.ItemGraphic>
							Categorias
						</Drawer.DrawerItem>

						<Drawer.DrawerItem onClick={this.gotFornecedor}>
							<List.ItemGraphic>account_circle</List.ItemGraphic>
							Fornecedores
						</Drawer.DrawerItem>

						<Drawer.DrawerItem onClick={this.gotPagar}>
							<List.ItemGraphic>account_circle</List.ItemGraphic>
							Contas a Pagar
						</Drawer.DrawerItem>

					<Drawer.DrawerItem onClick={this.gotReceber}>
							<List.ItemGraphic>account_circle</List.ItemGraphic>
							Contas a Receber
						</Drawer.DrawerItem>

					<Drawer.DrawerItem onClick={this.gotUsuarios}>
							<List.ItemGraphic>account_circle</List.ItemGraphic>
							Usuarios
						</Drawer.DrawerItem>


					</Drawer.DrawerContent>
				</Drawer.TemporaryDrawer>

			</div>
		);
	}
}
