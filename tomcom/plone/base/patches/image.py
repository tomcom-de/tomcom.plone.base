from Products.ATContentTypes.content.image import ATImage
from plone.app.blob.subtypes.image import SchemaExtender

ATImage.assocFileExt = ('jpg', 'jpeg', 'png', 'gif', 'tif', 'tiff', 'eps', 'wmf')
SchemaExtender.fields[0].allowable_content_types=('image/gif', 'image/jpeg', 'image/png', 'image/tiff', 'application/postscript', 'image/x-wmf')
