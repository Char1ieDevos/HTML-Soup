class SimpleHashTable:
	def __init__(self,size):
		self.size = size
		self.table = [None] * size
		
	def _hash(self, key):
		return hash(key) % self.size
		
	def insert(self, key, value):
		index = self._hash(key)
		self.table[index] = (key, value) # Directly insert the key-value pair
		
	def get(self, key):
		index = self._hash(key)
		if self.table[index] is not None and self.table[index][0] == key:
			return self.table[index][1]
		return None
		
	def delete(self, key):
		index = self._hash(key)
		if self.table[index] is not None and self.table[index][0] == key:
			self.table[index] = None
		