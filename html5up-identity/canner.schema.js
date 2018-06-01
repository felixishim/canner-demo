/** @jsx c */
import c from 'canner-script';

const name = CannerTypes.string().title('Name').description('Please enter a name');
const description = CannerTypes.string().title('Description').description('Enter description of yourself').ui('editor');
const thumb = CannerTypes.string().title('Your thumb').description('Upload your thumb').ui('image');
const bg = CannerTypes.string().title('Background').description('Background of your profile').ui('image');
const twitter = CannerTypes.string().title('Twitter').description('Twitter account').ui('link');
const facebook = CannerTypes.string().title('Facebook').description('Facebook account').ui('link');
const instagram = CannerTypes.string().title('Instagram').description('Instagram account').ui('link');

export default (
  <root>
    <object keyName="main" title="Main page">
      <string keyName="name" title="Name" description="Please enter a name"/>
      <object keyName="description" ui="editor"  title="Description" description="Enter description of yourself" />
      <string keyName="twitter" ui="link" title="Twitter" description="Twitter account"/>
      <string keyName="facebook" ui="link"  title="Facebook" description="Facebook account"/>
      <string keyName="thumb" ui="link" title="Thumb" description="Instagram account"/>
      <image keyName="bg" title="Background" description="Background of your profile"/>
    </object>
  </root>
)

const main = CannerTypes.object({
  name,
  description,
  twitter,
  facebook,
  instagram,
  thumb,
  bg
}).description('Main page');

module.exports = {main};