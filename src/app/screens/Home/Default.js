import React, { Component } from "react";
import {
  ButtonDefault,
  MainLogo,
  ControlledCarousel,
  Title,
  AccordionToggle,
  BadgeWithText,
  BadgeWithCounter,
  BadgeAlone,
  Pills,
  BtnGroup,
  BasicCard,
  CardsGroupNoMargin,
  CardsGroupMargin,
  BasicDropdown,
  BasicInput,
  InputPrepend,
  InputPrependRight,
  InputCheckbox,
  InputRadio,
  InputMultiAddon,
  InputMultiAddonRight,
  InputBtn,
  InputBtnRight,
  InputDropdown,
  InputDropdownRight,
  ListGroups,
  BaseNav,
  VerticalNav,
  //NavPills,
  BasicPagination,
  BasicTooltip,
  BasicToast,
  BasicPopover,
  DefaultModal,
  ModalCenter,
  Images,
  ImageFluid,
  RenderCode,
  NestedForm,
  ControlledEditor,
  InputCountLetters,
  PTruncate
} from "../../components";
import {
  dataImages,
  dataAccordion,
  dataGroupBtn,
  dataCardGroup,
  dataDropdown,
  dataInputDropdown,
  dataListGroup,
  dataNav
} from "../../data/data";
import "./style.scss";

class Default extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container-fluid home">
        <div className="example">
          <h4>P Truncate</h4>
          <div className="demo">
            <PTruncate text="12345678901234" maxLength="13" />
          </div>
          <div className="code">
            <RenderCode>
              &lt;PTruncate text="12345678901234" maxLength="13" /&gt;
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> text, maxLength
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Input count letters</h4>
          <div className="demo">
            <InputCountLetters limit="120" />
          </div>
          <div className="code">
            <RenderCode>&lt;InputCountLetters limit="120" /&gt;</RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Default:</strong> limit: "120"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>WYSIWYG</h4>
          <div className="demo">
            <ControlledEditor />
          </div>
          <div className="code">
            <RenderCode />
          </div>
        </div>

        <div className="example">
          <h4>Nested form</h4>
          <div className="demo">
            <NestedForm>
              <BasicInput placeholder="Nombre" />
              <BasicInput
                placeholder="Apellido"
                value={this.props.valueInput}
              />
            </NestedForm>
          </div>
          <div className="code">
            <RenderCode />
          </div>
          <div className="dataType">
            <RenderCode>data</RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong>
              <strong> Default:</strong>
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Accordion</h4>
          <div className="demo">
            <AccordionToggle items={dataAccordion} />
          </div>
          <div className="code">
            <RenderCode>
              &lt;AccordionToggle items=&#123;data&#125; /&gt;
            </RenderCode>
          </div>
          <div className="dataType">
            <RenderCode>
              const data = [ &#123; title: "Header 1", body: "body 1", variant:
              "link", eventKey: "0" &#125;, ... }
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> type, eventKey, title, body
              <strong> Default:</strong> variant: "link"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Badge</h4>
          <div className="demo">
            <BadgeAlone title="badge" />
          </div>
          <div className="code">
            <RenderCode>&lt;BadgeAlone title="badge" /&gt;</RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> title
              <strong> Default:</strong> variant: "info"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Badge with counter</h4>
          <div className="demo">
            <BadgeWithCounter text="badge con contador" counter="3" />
          </div>
          <div className="code">
            <RenderCode>
              &lt;BadgeWithCounter text="badge con contador" counter="3" /&gt;
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> text, counter
              <strong> Default:</strong> variantBadge: "info", variantBtn:
              "light"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Badge with text</h4>
          <div className="demo">
            <BadgeWithText text="Nuevo badge " title="Nuevo" />
          </div>
          <div className="code">
            <RenderCode>
              &lt;BadgeWithText text="Nuevo badge" title="Nuevo" /&gt;
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> text, title
              <strong> Default:</strong> variant: "info"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Pills</h4>
          <div className="demo">
            <Pills title="pill" />
          </div>
          <div className="code">
            <RenderCode>&lt;Pills title="pill" /&gt;</RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> title
              <strong> Default:</strong> variant: "info"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Button</h4>
          <div className="demo">
            <ButtonDefault name="Primary" variant="primary" disabled />
            <ButtonDefault name="Secondary" variant="secondary" active />
            <ButtonDefault name="Success" variant="success" block />
            <ButtonDefault name="Warning" variant="warning" />
            <ButtonDefault name="Danger" variant="danger" />
            <ButtonDefault name="Info" variant="info" />
            <ButtonDefault name="Light" variant="light" />
            <ButtonDefault name="Dark" variant="dark" />
            <ButtonDefault name="Link" variant="link" />
          </div>
          <div className="code">
            <RenderCode>
              &lt;ButtonDefault name="Primary" variant="primary" disabled /&gt;
            </RenderCode>
            <RenderCode>
              &lt;ButtonDefault name="Secondary" variant="secondary" active
              /&gt;
            </RenderCode>
            <RenderCode>
              &lt;ButtonDefault name="Success" variant="success" block /&gt;
            </RenderCode>
            <RenderCode>
              &lt;ButtonDefault name="Warning" variant="warning" /&gt;
            </RenderCode>
            <RenderCode>
              &lt;ButtonDefault name="Danger" variant="danger" /&gt;
            </RenderCode>
            <RenderCode>
              &lt;ButtonDefault name="Info" variant="info" /&gt;
            </RenderCode>
            <RenderCode>
              &lt;ButtonDefault name="Light" variant="light" /&gt;
            </RenderCode>
            <RenderCode>
              &lt;ButtonDefault name="Dark" variant="dark" /&gt;
            </RenderCode>
            <RenderCode>
              &lt;ButtonDefault name="Link" variant="link" /&gt;
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> name.
              <strong> Default:</strong> variant: "info" size: "sm" path: null
              <strong> Optional:</strong> disable, block, active
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Button Group</h4>
          <div className="demo">
            <BtnGroup items={dataGroupBtn} />
          </div>
          <div className="code">
            <RenderCode>&lt;BtnGroup items=&#123;data&#125; /&gt;</RenderCode>
          </div>
          <div className="dataType">
            <RenderCode>
              const data = [ &#123; variant: "info", title: "Btn 1", key: "1",
              size: "md" &#125;, ... ]
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> title, key
              <strong> Default:</strong> variant: "info", size: "md"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Card</h4>
          <div className="demo">
            <BasicCard
              src="http://www.gifs-animados.es/wallpapers/wallpapers/ardillas/wallpaper-ardillas-4838185.jpg"
              title="Title"
              text="Text"
              titleBtn="Aceptar"
            />
          </div>
          <div className="code">
            <RenderCode>
              &lt;BasicCard src="linkImg" title="Title" text="Text"
              titleBtn="Aceptar"/&gt;
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> title, text
              <strong> Default:</strong> size: "18rem", direction: "top",
              variantBtn: "info", path: null, colorText: "black", colorCard:
              "light", colorBorder: null
              <strong> Optional:</strong> src, subtitle, titleBtn
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Cards group no-margin</h4>
          <div className="demo">
            <CardsGroupNoMargin items={dataCardGroup} />
          </div>
          <div className="code">
            <RenderCode>
              &lt;CardsGroupNoMargin items=&#123;data&#125; /&gt;
            </RenderCode>
          </div>
          <div className="dataType">
            <RenderCode>
              const data = [ &#123; position: "top", src: "linkImg", title:
              "card 1", <br /> text: "text card 1", footer: "footer 1", key: "1"
              &#125;, ... ]
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> src, title, key
              <strong> Default:</strong> position: "top", size: "18rem"
              <strong> Optional:</strong> text, footer
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Cards group with margin</h4>
          <div className="demo">
            <CardsGroupMargin items={dataCardGroup} />
          </div>
          <div className="code">
            <RenderCode>
              &lt;CardsGroupMargin items=&#123;data&#125; /&gt;
            </RenderCode>
          </div>
          <div className="dataType">
            <RenderCode>
              const data = [ &#123; position: "top", src: "linkImg", title:
              "card 1", <br /> text: "text card 1", footer: "footer 1", key: "1"
              &#125;, ... ]
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> src, title, key
              <strong> Default:</strong> position: "top", size: "18rem"
              <strong> Optional:</strong> text, footer
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Carousel</h4>
          <div className="demo">
            <ControlledCarousel items={dataImages} />
          </div>
          <div className="code">
            <RenderCode>
              &lt;ControlledCarousel items=&#123;data&#125; /&gt;
            </RenderCode>
          </div>
          <div className="dataType">
            <RenderCode>
              const data = [ &#123; src: "linkImg", title: "1", subtitle: "Uno",
              key: "1" &#125;, ... ]
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> src, key
              <strong> Optional:</strong> title, subtitle
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Dropdown</h4>
          <div className="demo">
            <BasicDropdown
              items={dataDropdown}
              titleDrop="Dropdown"
              variant="info"
            />
          </div>
          <div className="code">
            <RenderCode>
              &lt;BasicDropdown items=&#123;data&#125; titleDrop="dropdown"
              variant="info" /&gt;
            </RenderCode>
          </div>
          <div className="dataType">
            <RenderCode>
              const data = &#123; path: "/", title: "Action 1", key: "1" &#125;,
              ... ]
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> titleDrop, title, key
              <strong> Default:</strong> variant: "info", path: null
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Input</h4>
          <div className="demo">
            <BasicInput />
          </div>
          <div className="code">
            <RenderCode>&lt;BasicInput /&gt;</RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong> Default:</strong> size: "sm", placeholder: null
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Input dropdown left</h4>
          <div className="demo">
            <InputDropdown items={dataInputDropdown} title="dropdown" />
          </div>
          <div className="code">
            <RenderCode>
              &lt;InputDropdown items=&#123;data&#125; title="dropdown" /&gt;
            </RenderCode>
          </div>
          <div className="dataType">
            <RenderCode>
              const data = [ &#123; path: "/", text: "action 1", key: "1"
              &#125;, ... ]
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> title, text, key
              <strong> Default:</strong> variant: "info", ariaDescribedby: null,
              path: null, size: "md"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Input dropdown right</h4>
          <div className="demo">
            <InputDropdownRight items={dataInputDropdown} title="dropdown" />
          </div>
          <div className="code">
            <RenderCode>
              &lt;InputDropdownRight items=&#123;data&#125; title="dropdown"
              /&gt;
            </RenderCode>
          </div>
          <div className="dataType">
            <RenderCode>
              const data = [ &#123; path: "/", text: "action 1", key: "1"
              &#125;, ... ]
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> title, text, key
              <strong> Default:</strong> variant: "info", ariaDescribedby: null,
              path: null, size: "md"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Input button</h4>
          <div className="demo">
            <InputBtn title="button" />
          </div>
          <div className="code">
            <RenderCode>&lt;InputBtn title="button" /&gt;</RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> title
              <strong> Default:</strong> placeholder: null, ariaLabel: null,
              ariaDescribedby: null, variant: "info"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Input button right</h4>
          <div className="demo">
            <InputBtnRight title="button" />
          </div>
          <div className="code">
            <RenderCode>&lt;InputBtnRight title="button" /&gt;</RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> title
              <strong> Default:</strong> placeholder: null, ariaLabel: null,
              ariaDescribedby: null, variant: "info"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Input multi addon</h4>
          <div className="demo">
            <InputMultiAddon placeholder="input" addon1="1" addon2="2" />
          </div>
          <div className="code">
            <RenderCode>
              &lt;InputMultiAddon placeholder="input" addon1="1" addon2="2"
              /&gt;
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> addon1, addon2
              <strong> Default:</strong> placeholder: null, ariaLabel: null
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Input multi addon right</h4>
          <div className="demo">
            <InputMultiAddonRight placeholder="input" addon1="1" addon2="2" />
          </div>
          <div className="code">
            <RenderCode>
              &lt;InputMultiAddonRight placeholder="input" addon1="1" addon2="2"
              /&gt;
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> addon1, addon2
              <strong> Default:</strong> placeholder: null, ariaLabel: null
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Input radio</h4>
          <div className="demo">
            <InputRadio />
          </div>
          <div className="code">
            <RenderCode>&lt;InputRadio /&gt;</RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong> Default:</strong> size: "sm", ariaLabelInp: null,
              ariaLabelForm: null
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Input checkbox</h4>
          <div className="demo">
            <InputCheckbox />
          </div>
          <div className="code">
            <RenderCode>&lt;InputCheckbox /&gt;</RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong> Default:</strong> size: "sm", ariaLabelInp: null,
              ariaDescribedby: null
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Input prepend</h4>
          <div className="demo">
            <InputPrepend text="@" />
          </div>
          <div className="code">
            <RenderCode>&lt;InputPrepend text="@" /&gt;</RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> text
              <strong> Default:</strong> size: "sm", placeholder: null,
              ariaLabel: null, ariaDescribedby: null
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Input prepend right</h4>
          <div className="demo">
            <InputPrependRight text="@" />
          </div>
          <div className="code">
            <RenderCode>&lt;InputPrependRight text="@" /&gt;</RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> text
              <strong> Default:</strong> size: "sm", placeholder: null,
              ariaLabel: null, ariaDescribedby: null
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Image rounded</h4>
          <div className="demo">
            <Images
              className="imgcuadrada"
              src="https://nato-pa.int/sites/default/files/default_images/default-image.jpg"
              rounded
            />
            <Images
              src="https://nato-pa.int/sites/default/files/default_images/default-image.jpg"
              roundedCircle
            />
            <Images
              src="https://nato-pa.int/sites/default/files/default_images/default-image.jpg"
              thumbnail
            />
          </div>
          <div className="code">
            <RenderCode>
              &lt;Images className="imgcuadrada" src="linkImg" rounded/&gt;
            </RenderCode>
            <RenderCode>
              &lt;Images className="imgcuadrada" src="linkImg"
              roundedCircle/&gt;
            </RenderCode>
            <RenderCode>
              &lt;Images className="imgcuadrada" src="linkImg" thumbnail/&gt;
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> src
              <strong> Optional:</strong> rounded,
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Image fluid</h4>
          <div className="demo">
            <ImageFluid src="https://blog.twitter.com/content/dam/blog-twitter/official/en_us/products/2017/rethinking-our-default-profile-photo/Avatar-Blog2-Round1.png.img.fullhd.medium.png" />
          </div>
          <div className="code">
            <RenderCode>&lt;ImageFluid src="linkImg"/&gt;</RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> src
            </p>
          </div>
        </div>

        <div className="example">
          <h4>List group</h4>
          <div className="demo">
            <ListGroups items={dataListGroup} />
          </div>
          <div className="code">
            <RenderCode>&lt;ListGroups items=&#123;data&#125; /&gt;</RenderCode>
          </div>
          <div className="dataType">
            <RenderCode>
              const data = [ &#123; title: "1", variant: "light", key: "1"
              &#125;, ... ]
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> title, key
              <strong> Default:</strong> variant: "info", size: "sm"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Modal</h4>
          <div className="demo">
            <DefaultModal
              titleBtn="Modal default"
              title="Título modal"
              body="Body modal"
              titleBtnClose="Close modal"
              titleBtnSave="Save modal"
            />
          </div>
          <div className="code">
            <RenderCode>
              &lt;DefaultModal titleBtn="Modal default" title="Título modal"{" "}
              <br />
              body="Body modal" titleBtnClose="Close modal" titleBtnSave="Save
              modal"/&gt;
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> titleBtn, title, body, titleBtnClose,
              titleBtnSave
              <strong> Default:</strong> variantBtn: "info", variantBtnClose:
              "primary", variantBtnSave: "success"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Modal center</h4>
          <div className="demo">
            <ModalCenter
              header="Modal"
              title="modal title"
              body="modal body"
              titlebtn="close"
              titlebtnmodal="Modal centrado"
            />
          </div>
          <div className="code">
            <RenderCode>
              &lt;ModalCenter header="Modal" title="modal title" body="modal
              body"
              <br />
              titlebtn="close" titlebtnmodal="Modal centrado"/&gt;
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> title, body, titleBtn
              <strong> Default:</strong> header: null, size: "lg"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Logo</h4>
          <div className="demo">
            <MainLogo src="https://nnodes.com/Logo_Nnodes.png" alt="logo" />
          </div>
          <div className="code">
            <RenderCode>&lt;MainLogo src="linkImg" alt="logo"/&gt;</RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> src, alt
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Nav</h4>
          <div className="demo">
            <BaseNav items={dataNav} active="/home" />
          </div>
          <div className="code">
            <RenderCode>
              &lt;BaseNav items=&#123;data&#125; variant="tabs" active="/home"
              /&gt;
            </RenderCode>
          </div>
          <div className="dataType">
            <RenderCode>
              const data = [ &#123; href: "/home", status: "active", title:
              "Active", key: "1" &#125;, ... ]
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> title, key
              <strong> Default:</strong> variant: "tabs", path: null
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Vertical nav</h4>
          <div className="demo">
            <VerticalNav items={dataNav} />
          </div>
          <div className="code">
            <RenderCode>
              &lt;VerticalNav items=&#123;data&#125; /&gt;
            </RenderCode>
          </div>
          <div className="dataType">
            <RenderCode>
              const data = [ &#123; href: "/home", status: "active", title:
              "Active", key: "1" &#125;, ... ]
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> title, key
              <strong> Default:</strong> variant: "tabs", path: null
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Pagination</h4>
          <div className="demo">
            <BasicPagination />
          </div>
          <div className="code">
            <RenderCode>&lt;BasicPagination /&gt;</RenderCode>
          </div>
          <div className="tip">
            <p>Working for you</p>
          </div>
        </div>

        <div className="example">
          <h4>Popover</h4>
          <div className="demo">
            <BasicPopover
              title="popover"
              direction="bottom"
              titleBtn="popover disabled"
              disabled
            />
            <BasicPopover title="popover" titleBtn="popover active" />
          </div>
          <div className="code">
            <RenderCode>
              &lt;BasicPopover title="popover" titleBtn="popover disabled"
              disabled /&gt;
            </RenderCode>
            <RenderCode>
              &lt;BasicPopover title="popover" titleBtn="popover active" /&gt;
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> title, titleBtn
              <strong> Default:</strong> body: null, direction: "bottom",
              variantBtn: "info"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Tooltip</h4>
          <div className="demo">
            <BasicTooltip
              direction="top"
              text="top"
              title="tooltip 1"
              key="top"
              variant="primary"
            />
            <BasicTooltip
              direction="bottom"
              text="bottom"
              title="tooltip 3"
              key="bottom"
              variant="success"
            />
            <BasicTooltip
              direction="right"
              text="right"
              title="tooltip 4"
              key="right"
              variant="danger"
            />
            <BasicTooltip
              direction="left"
              text="left"
              title="tooltip 5"
              key="left"
              variant="warning"
            />
          </div>
          <div className="code">
            <RenderCode>
              &lt;BasicTooltip direction="top" text="top" title="tooltip 1"
              key="top" variant="primary"/&gt;
            </RenderCode>
            <RenderCode>
              &lt;BasicTooltip direction="bottom" text="bottom" title="tooltip
              2" key="top" variant="success"/&gt;
            </RenderCode>
            <RenderCode>
              &lt;BasicTooltip direction="right" text="right" title="tooltip 3"
              key="top" variant="danger"/&gt;
            </RenderCode>
            <RenderCode>
              &lt;BasicTooltip direction="left" text="left" title="tooltip 4"
              key="top" variant="warning"/&gt;
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> direction, text, title, key.
              <strong> Default:</strong> variant: "info"
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Title</h4>
          <div className="demo">
            <Title title="Home" />
          </div>
          <div className="code">
            <RenderCode>&lt;Title title="Home" /&gt;</RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> title
            </p>
          </div>
        </div>

        <div className="example">
          <h4>Toast</h4>
          <div className="demo">
            <BasicToast body="body toast" title="btn toast" header="header" />
          </div>
          <div className="code">
            <RenderCode>
              &lt;BasicToast body="body toast" title="btn toast" header="header"
              /&gt;
            </RenderCode>
          </div>
          <div className="tip">
            <p>
              <strong>Required:</strong> body, title, header
              <strong> Default:</strong> src: null, text: null, title: null
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Default;

/* <div className="example"> 
<RenderCode>
&lt; &gt;
</RenderCode>
</div> */
